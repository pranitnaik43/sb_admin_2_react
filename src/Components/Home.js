const Home = () => {

  const cardsData = [
    {
      borderColor: "border-left-primary",
      title: "Earnings (Monthly)",
      text: "$40,000",
      icon: "fa-calendar"
    },
    {
      borderColor: "border-left-success",
      title: "Earnings (Annual)",
      text: "$215,000",
      icon: "fa-dollar-sign"
    },
    {
      borderColor: "border-left-info",
      title: "Tasks",
      text: "50%",
      icon: "fa-clipboard-list",
      progress: "50"
    },
    {
      borderColor: "border-left-warning",
      title: "Pending Requests",
      text: "18",
      icon: "fa-comments"
    }
  ]

  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
        </div>

        

      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
}

export default Home;