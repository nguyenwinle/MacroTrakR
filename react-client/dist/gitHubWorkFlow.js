

// ***************** Individual setupMaster

// this step forks the organizations repo to personal github

    // done on github

    //********** Step One **************//
        // fork org/repo to my github account


// this command clones personal forked repo to the local space

    // done on terminal on computer

    //********** Step Two **************//
        // git clone me/repo       



// this command adds a remote upstream to the org/repo

    // done on terminal on computer

    //********** Step Three **************//
        // git remote add upstream org/repo
        

// this command creates a new dev branch

    // done on terminal on computer

    //********** Step Four **************//
        // git checkout -b dev origin/dev       
        







// WORKFLOW ***** WORKFLOW ***** WORKFLOW ***** WORKFLOW ***** WORKFLOW

// this command pulls from the dev branch of 
// the organization repository

    // done on terminal on computer

    //*******   Step One    ***********//
        // git pull --rebase upstream dev

// after the previous command the working directory sho
// matched the organization reposiory we now want to create a dev branch to work on
    
    // done on terminal on computer

    //*******   Step Two   ***********//
        // git checkout -b featBranch

    //*******   Step Three   ***********//
        // DEVELOPE! Code and make changes on the featBranch that you created in the prior step

// these two commands adds and then commits your changes

    // done on terminal on computer
    //*******   Step Four   ***********//
        // git add .
        // git commit -m"some message pertaining to the commit"

// this command pushes the commits you just made onto the featBranch that you created
    
    // done on terminal on computer

    //*******   Step Five   ***********//
        // git push origin featBranch

    // you now have two options; if you'd still like to continue working then head
    // to STEP THREE else continue;


 // this command checkouts out the dev branch

     // done on terminal on computer

    //*******   Step Six   ***********//
    // git checkout dev
    
// this command will "rebase" the project directory with the most updated version of
// the project from github

    // done on terminal on computer

    //*******   Step Seven   ***********//
    // git pull --rebase upstream dev

// this command will merge the dev with the featBranch that you created
// you only want to be making pull request with your dev branch so this 
// is why you are merging it with the featBranch you were currently working on

    // done on terminal on computer

    //*******   Step Eight   ***********//
    // git merge featBranch

 // this command will push to the organization's repository

    // done on terminal on computer

    //*******   Step Nine   ***********//
    // get push origin dev   

// now the final step is to make a pull request from your repository's dev branch to to 