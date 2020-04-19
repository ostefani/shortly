import React, { useEffect, useState } from 'react';
import AllLinks from '../containers/AllLinks';
import fetchURI from '../lib/fetchURI';

export default () => {
    const [onScroll, setOnScroll] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [links, setLinks] = useState([]);
    const [isListEnd, setIsListEnd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (onScroll && !isListEnd) {
            setPageNum(pageNum + 1);
            setOnScroll(false);
        }
    }, [onScroll, isListEnd]);


    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentScroll = document.documentElement.scrollTop;

            if (currentScroll === maxScroll) {
                setOnScroll(true);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [setOnScroll]);

    const fetchList = async () => {
        setIsLoading(true);
        const result = await fetchURI({ pageNum });
        setIsLoading(false);

        if (result.found && result.links.length > 0) {
            setLinks([...links, ...result.links]);
        }
        else if (result.found && result.links.length === 0) {
            setIsListEnd(true);
        }
        else if (!result.found) {
            console.log('No user found');
        }
        else if (result.error || result.message) {
            // Show modal here
            console.log(result.error || result.message);
        }
    };

    useEffect(() => {
        if (!isListEnd) {
            fetchList(pageNum);
        }
    }, [fetchURI, pageNum, isListEnd]);


    return <AllLinks links={links} isLoading={isLoading} />;
};
