import Page from '../../components/Page';
import UserLinks from '../../components/UserLinks';

export default ({ links, isLoading }) => (
    <Page>
        <UserLinks links={links} />
        {isLoading && <div>Loading</div>}
    </Page>
);


/*export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:3001/api/user', {
        headers: { cookie: ctx.req.headers.cookie },
        credentials: 'include',
    });
    const links = await res.json();
    return { props: { links: [...links] } };
}*/
