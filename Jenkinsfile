pipeline {
    agent any
    environment {
        API_KEY = credentials('9df39e7a8954e7b111dfdeed36e1ade4') // Reference your API key if needed
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Ramarao3562/moviesearch.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Use `sh 'npm install'` if running on Linux
            }
        }
        stage('Build Application') {
            steps {
                bat 'npm run build'  // Use `sh 'npm run build'` if running on Linux
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
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed.'
        }
    }
}
