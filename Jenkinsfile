pipeline{

 agent any 

  
    stages{
        stage("Build"){
            steps{
                powershell(script: 'echo "Building the app"')
            }
        }
        stage("Test"){
            steps{
                powershell(script: 'echo "Testing the app"')
            }
        }
        stage("Deploy"){
            steps{
                powershell(script: 'echo "Deploying the app"')
            }
        }
    }
    

}

