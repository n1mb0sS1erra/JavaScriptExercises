//------------------------------------------------

//-------------[START] Declaration of Variables-------------

// (b) Declare a member array (name it as memArray) for storing the member objects in it

var memArray = [];
var message;

//-------------[END] Declaration of Variables--------------

//-----This is the object contructor for MemberObj-----
// (a) Declare a member object (name it as MemberObj) Constructor or Template to hold the following:
// (i) id
// (ii) name
// (iii) mobileNum

function MemberObj(id,name,mobileNum){;
    this.id=id;
    this.name=name;
    this.mobileNum=mobileNum;
};

//-----This function is for the created members-----
// (c) Create three (3) member Objects (e.g. member1, member2, etc.) with fictitious member
// properties such as:
// id name mobileNum
// m001 John 91234567
// m002 Mary 92345678
// m003 Charlie 93456789
// The script will prompt the user to enter the member id, member name and member mobile of the new member 

function createMembers(){;
    var member1 = new MemberObj("m001","John","91234567");
    var member2 = new MemberObj("m002","Mary","92345678");
    var member3 = new MemberObj("m003","Charlie","93456789");
    var member4 = new MemberObj(memId=prompt("Enter member id: "), memName=prompt("Enter member name: "), memMobileNum=prompt("Enter member mobile: "));
      
// (d) Store the newly created member Objects into the member array declared in (b).
//memArray = [member1, member2, member3]; //method #1 to store objs to array
    
    memArray.push(member1);
    memArray.push(member2);
    memArray.push(member3);
    memArray.push(member4);
};

//-----This function prints out all records on file using variable message-----

function prepareMessage(){;
    message = "ID" + "                    " + "Name" + "               " + "MobileNumber" + "\n==============================================\n";
    message += memArray[0].id + "               " +memArray[0].name + "                 " + memArray[0].mobileNum +   "\n";
    message += memArray[1].id + "               " +memArray[1].name + "                 " + memArray[1].mobileNum +   "\n";
    message += memArray[2].id + "               " +memArray[2].name + "              " + memArray[2].mobileNum +   "\n";
    message += memArray[3].id + "               " +memArray[3].name + "                 " + memArray[3].mobileNum +   "\n";
};

//-----Main Programs--------------

createMembers();
prepareMessage();
console.log(message);
alert(message);
