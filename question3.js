const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];
  
function countfileextension(files)
{
     var count=0,obj={};
     for(var i=0;i<files.length;i++)
        {
            count++;
            var add=count;
            obj.add[i]=add;
        }
        return add;
        for(var key in files)
            {
                console.log(obj.add[i]);
            }
}  