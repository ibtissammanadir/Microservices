pipeline {
    agent any

    environment {
        ORDER_IMAGE = "ordermicroservice"
        USER_IMAGE = "usermicroservice"
        FRONTEND_IMAGE = "frontend"
        ORDER_PORT = "8080"
        USER_PORT = "8081"
        FRONTEND_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ibtissammanadir/Microservices.git'
            }
        }

        stage('Build Java Services') {
            steps {
                script {
                    // Build OrderMicroService
                    dir('OrderMicroService') {
                        sh 'mvn clean package -DskipTests'
                    }
                    // Build UserMicroService
                    dir('UserMicroService') {
                        sh 'mvn clean package -DskipTests'
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker image for OrderMicroService
                    sh "docker build -t $ORDER_IMAGE:latest -f OrderMicroService/Dockerfile OrderMicroService"
                    // Build Docker image for UserMicroService
                    sh "docker build -t $USER_IMAGE:latest -f UserMicroService/Dockerfile UserMicroService"
                    // Build Docker image for Frontend
                    sh "docker build -t $FRONTEND_IMAGE:latest -f frontend/Dockerfile frontend"
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Déployer les conteneurs avec Docker Compose
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            echo 'Nettoyage des images Docker non utilisées'
            sh 'docker image prune -f'
        }
        success {
            echo 'Déploiement réussi !'
        }
        failure {
            echo 'Échec du déploiement'
        }
    }
}
