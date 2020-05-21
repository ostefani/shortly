pipeline {
    agent any
    environment {
        PATH = "$PATH:~/usr/local/bin"
    }
    stages {
        stage('build') {
            steps {
                sh 'echo $PATH'
                sh 'docker-compose up'
            }
        }
    }
}
