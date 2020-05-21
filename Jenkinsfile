pipeline {
    agent { docker { image 'node:10' } }
    stages {
        stage('build') {
            steps {
                sh 'docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up'
            }
        }
    }
}
