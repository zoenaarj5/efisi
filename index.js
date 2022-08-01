const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];
//console.log("oppostatus="+JSON.stringify(oppoStatus));
const Module = class {
	constructor() {

	}
	start() {
		let ltz=document.getElementsByName("status");
		let lt=ltz[0];
		lt.setAttribute("onchange","Module.updateSuccessValue()");
		console.log("lt="+lt);
		oppoStatus.forEach(
		os=>{
		  console.log("os status = "+os.STATUS+" os k oppo status = "+os.K_OPPO_STATUS+", os success = "+os.SUCCESS);
		   let opt=document.createElement("option");
		   opt.setAttribute("value",os.K_OPPO_STATUS);
		   opt.innerHTML=os.STATUS;
		   lt.appendChild(opt);
		});
		// Start modifying the form elements here!
		let sxsz=document.getElementsByName("success");
		const sxs=sxsz[0];
		sxs.addEventListener("change",function(){
			updateSuccessValue();
	  // You are allowed to add extra methods and properties to this class
			});
		lt.onchange();
	}
	 static updateSuccessValue(){
		 console.log("Updating success value...");
		  let sxs=document.getElementsByName("status");
		  sxs=sxs[0];
		  oppoStatus.forEach(os=>{
			  console.log("Trying attribute "+sxs.value+"...");
			  if(os.K_OPPO_STATUS==sxs.value){
				  console.log("checking with oppo status id "+os.K_OPPO_STATUS+"...");
				  let elt=document.getElementsByName("success");
				  elt=elt[0];
				  elt.setAttribute("value",os.SUCCESS);
				  let op=document.getElementsByClassName("output");
				  op=op[0];
				  let jsoncom=JSON.stringify({status:os.K_OPPO_STATUS,success:os.SUCCESS});
				  console.log("jsoncom:"+jsoncom);
					op.innerHTML=jsoncom;
				  return;
			  }
		  });
	  }
}

const main = new Module();
main.start();