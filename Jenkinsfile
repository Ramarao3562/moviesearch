pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/Ramarao3562/moviesearch.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Build Application') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Starting deployment...'
                    try {
                        bat 'xcopy build\\* "C:\\path\\to\\deployment\\directory" /E /I /Y'
                        echo 'Deployment Successful'
                    } catch (Exception e) {
                        echo 'Deployment Failed: ' + e.toString()
                        error('Deployment failed at the deployment stage.')
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
