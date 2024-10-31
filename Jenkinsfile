pipeline {
    agent any

    environment {
        // Access the API key from Jenkins credentials
        MOVIE_API_KEY = credentials('9df39e7a8954e7b111dfdeed36e1ade4')
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the Git repository with your React app
                git 'https://github.com/Ramarao3562/moviesearch.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                // Build the React application for production
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Copy the build folder contents to the deployment directory on the server
                // Adjust "path/to/deployment/directory" to your deployment directory
                bat 'cp -R build/* /path/to/deployment/directory/'
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
