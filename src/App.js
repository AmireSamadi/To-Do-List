import React, { Component } from "react";
import { Alert, Badge, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Works from "./components/work/works";

class App extends Component {
  state = {
    works: [],
    work: "",
    do: 0,
    showWork: true,
  };
  //show work
  handelShowWork = () => {
    this.setState({ showWork: !this.state.showWork });
  };

  // delete Work
  handelDeleteWork = (id) => {
    let works = [...this.state.works];
    let worksFilter = works.filter((work) => work.id !== id);
    let done = this.state.do + 1;
    this.setState({ works: worksFilter, do: done });
    toast.warn("از لیست حذف شد", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  // change work
  handelChangeWork = (id, event) => {
    let works = [...this.state.works];
    let findIndex = works.findIndex((work) => work.id === id);
    let work = works[findIndex];
    work.fullName = event.target.value;
    works[findIndex] = work;
    this.setState({ works });
  };

  // add work
  handelNewWork = () => {
    let works = [...this.state.works];
    let work = {
      id: Math.round(Math.random() * 1000),
      fullName: this.state.work,
    };
    if (this.state.work !== "" && this.state.work !== " ") {
      works.push(work);
      this.setState({ works, work: "" });
      toast.success(`${this.state.work}${" "}به لیست امروز اضافه شد`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //set value for fullName
  setName = (event) => {
    this.setState({ work: event.target.value });
  };
  //render
  render() {
    let { works, showWork } = this.state;

    //condition rendering
    let work = null;
    if (showWork) {
      work = (
        <Works
          workPerson={works}
          deleteWork={this.handelDeleteWork}
          changeWork={this.handelChangeWork}
        />
      );
    }
    //background badge
    let backgroundBadge = [];
    if (works.length >= 3) backgroundBadge.push("success");
    if (works.length === 2) backgroundBadge.push("warning");
    if (works.length <= 1) backgroundBadge.push("danger");

    return (
      <div className="rtl text-center">
        <Alert variant="warning">
          <h1>لیست کار های روزانه</h1>
        </Alert>
        <Alert variant="light">
          <h3>
            تعداد کار های امروز{" "}
            <Badge pill bg={backgroundBadge} text="light">
              {works.length}
            </Badge>{" "}
            تا می باشد
          </h3>

          <h4>
            <Badge pill variant="info" text="light">
              {this.state.do} کار انجام شده است
            </Badge>
          </h4>
        </Alert>

        <form action="#" onSubmit={(event) => event.preventDefault()}>
          <div className="input-group justify-content-center">
            <input
              className="w-25 "
              onChange={this.setName}
              value={this.state.work}
            />

            <div className="input-group-prepend">
              <Button
                type="submit"
                variant="secondary"
                className="fa fa-plus-square"
                onClick={this.handelNewWork}
              ></Button>
            </div>
          </div>
        </form>

        <Button
          variant={showWork ? "info" : "danger"}
          onClick={this.handelShowWork}
          className="my-3"
        >
          {" "}
          نمایش لیست روزانه{" "}
        </Button>
        {work}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    );
  }
}

export default App;
