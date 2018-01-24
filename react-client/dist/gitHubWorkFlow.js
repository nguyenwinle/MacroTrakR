// this command pulls from the dev branch of 
// the organization repository

    //*******   Step One    ***********//
        // git pull --rebase upstream dev

// after the previous command the working directory sho
// matched the organization reposiory we now want to create a dev branch to work on
    
    //*******   Step Two   ***********//
        // git checkout -b featBranch

    //*******   Step Three   ***********//
        // Develop! Code and make changes on the featBranch that you created in the prior step

// these two commands adds and then commits your changes

    //*******   Step Four   ***********//
        // git add .
        // git commit -m"some message pertaining to the commit"

// this command pushes the commits you just made onto the featBranch that you created
    
    //*******   Step Five   ***********//
        // git push origin featBranch

    // you now have two options; if you'd still like to continue working then head
    // to STEP THREE else continue;


 // this command checkouts out the dev branch

    //*******   Step Six   ***********//
    // git check dev
    
// this command will "rebase" the project directory with the most updated version of
// the project from github

    //*******   Step Seven   ***********//
    // git pull --rebase upstream dev

// this command will merge the dev with the featBranch that you created
// you only want to be making pull request with your dev branch so this 
// is why you are merging it with the featBranch you were currently working on

    //*******   Step Eight   ***********//
    // git merge featBranch

 // this command will push to the organization's repository

    //*******   Step Nine   ***********//
    // get push origin dev   

// now the final step is to make a pull request from your repository's dev branch to to 