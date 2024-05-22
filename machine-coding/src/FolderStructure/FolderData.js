export const folderData = [
  {
    id: 1,
    title: "Folder 1",
    icon: "folder",
    isFolder: true,
    items: [
      {
        id: 1.1,
        title: "Folder 1.1",
        icon: "folder",
        isFolder: true,

        items: [
          {
            id: "1.1.1",
            title: "Folder 1.1.1",
            icon: "folder",
            isFolder: true,
            items: [
              {
                id: "1.1.1.2",
                title: "file 1.1.1.2",
                icon: "file",
                isFolder: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "File 2.0",
    icon: "file",
    isFolder: false,
  },
  {
    id: 3,
    title: "File 3.0",
    icon: "file",
    isFolder: false,
  },
  {
    id: 4,
    title: "Folder 2",
    icon: "folder",
    isFolder: true,
    items: [
      {
        id: 4.1,
        title: "Folder 4.1",
        icon: "folder",
        isFolder: true,

        items: [
          {
            id: "4.1.1",
            title: "Folder 4.1.1",
            icon: "folder",
            isFolder: true,
            items: [
              {
                id: "4.1.9.2",
                title: "file 1.1.1.2",
                icon: "file",
                isFolder: false,
              },
              {
                id: "4.1.1.2",
                title: "file 4.1.1.3",
                icon: "folder",
                isFolder: true,
                items: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
