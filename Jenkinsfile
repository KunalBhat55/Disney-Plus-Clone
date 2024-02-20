pipeline{

 agent any 

  
    stages{

        stage("Build"){
            steps{
                powershell(script: 'docker build -t disneyplus:jenkins .')
            }
        }
        stage("Test"){
            steps{
                powershell(script: 'echo "Testing the app"')
            }
        }
        stage("Deploy to DockerHub"){
           
            steps{

                withCredentials([
                    string(credentialsId: 'dockerhub', variable: 'DOCKER_TOKEN'),
                    string(credentialsId: 'username', variable: 'USERNAME')
                ])


                {
                    powershell(script: '''
                        docker login -u $env:USERNAME -p $env:DOCKER_TOKEN
                        docker tag disneyplus:jenkins $env:USERNAME/disneyplus:jenkins
                        docker push $env:USERNAME/disneyplus:jenkins
                    '''
                    )
                }


            }


        }

    }
    

}

