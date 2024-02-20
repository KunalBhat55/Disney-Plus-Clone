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
                powershell(script: '''
                    docker login -u %username% -p %dockerToken%
                    docker tag disneyplus:jenkins %username%/disneyplus:jenkins
                    docker push %username%/disneyplus:jenkins'''
                )

            }
        }
    }
    

}

