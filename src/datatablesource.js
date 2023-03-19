
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },

  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 120,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  }
];



export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "desc",
    width: 230,
  }

];



export const roomColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "desc",
    headerName: "Description",
    width: 400,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 150,
  }
];



