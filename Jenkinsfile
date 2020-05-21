pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'echo $PATH'
                sh 'docker-compose up'
            }
        }
    }
}
