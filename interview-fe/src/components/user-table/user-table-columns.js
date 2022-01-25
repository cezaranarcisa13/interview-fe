const userTableColumns = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'User name',
    },
    {
      id: 'last',
      numeric: false,
      disablePadding: false,
      label: 'Last name',
    },
    {
      id: 'gender',
      numeric: false,
      disablePadding: false,
      label: 'Gender',
    },
    {
      id: 'age',
      numeric: true,
      disablePadding: false,
      label: 'Age',
    },

  ];


export default userTableColumns;