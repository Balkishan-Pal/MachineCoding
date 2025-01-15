

export const dummyData = [
    {
        name:'Folder 1',
        isFolder:true,
        items:[],
        id:'1'
    },
    {
        name:'Folder 2',
        isFolder:true,
         id:'2',
        items:[
            {
                name:'Folder 1.1',
                isFolder:true,
                id:'2.1',
                items:[
                    {
                        name:'Folder 1.2.2',
                        isFolder:true,
                        id:'2.1.1',
                        items:[],
                    }
                ]
            }
        ],
       
    },
    {
        name:'File 1',
        isFolder:false,
        items:[],
        id:'3'
    },
    {
        name:'File 2',
        isFolder:false,
        items:[],
        id:'4'
    },
    {
        name:'Folder 3',
        isFolder:true,
        items:[],
        id:'3.2'
    }
]