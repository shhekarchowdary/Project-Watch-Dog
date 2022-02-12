class Project {

    constructor(pName, pId, pTasks, pUsers){
        this.pName = pName;
        this.pId = pId;
        this.pTasks = pTasks;
        this.pUsers = pUsers;
    }

    get projectName(){
        return this.pName;
    }

}
