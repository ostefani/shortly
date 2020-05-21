pipeline {
    agent { docker { image 'node:10' } }
    stages {
        stage('build') {
            steps {
                sh 'echo $PATH'
                sh '/usr/local/bin/docker-compose up'
            }
        }
    }
}
