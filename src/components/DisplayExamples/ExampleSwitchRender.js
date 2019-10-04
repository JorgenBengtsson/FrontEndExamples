import React from "react";

import ExampleDisplayer from "./ExampleDisplayer";
import BodyContent from "./../FetchExamples/BodyContent";
import PostRequest from "./../FetchExamples/PostRequest";
import ResponseObject from "./../FetchExamples/ResponseObject";
import SimpleFetch from "./../FetchExamples/SimpleFetch";
import SearchMovieDB from "./../SearchMovieDB/SearchMovieDB";
import LoadSpinner from "./../ThirdPartyPackages/LoadSpinner";
import ReactModal from "./../ThirdPartyPackages/ReactModal";

export default function ExampleSwitchRender(props) {
  switch (props.param) {
    case "Fetch Examples":
      return (
        <>
          <ExampleDisplayer
            title="BodyContent"
            desc="src/components/FetchExamples/BodyContent"
          >
            <BodyContent />
          </ExampleDisplayer>
          <ExampleDisplayer
            title="PostRequest"
            desc="src/components/FetchExamples/PostRequest"
          >
            <PostRequest />
          </ExampleDisplayer>

          <ExampleDisplayer
            title="ResponseObject"
            desc="src/components/FetchExamples/ResponseObject"
          >
            <ResponseObject />
          </ExampleDisplayer>
          <ExampleDisplayer
            title="SimpleFetch"
            desc="src/components/FetchExamples/SimpleFetch"
          >
            <SimpleFetch />
          </ExampleDisplayer>
        </>
      );
    case "SearchMovieDB Examples":
      return (
        <>
          <ExampleDisplayer
            title="SearchMovieDB"
            desc="src/components/SearchMovieDB/SearchMovieDB"
          >
            <SearchMovieDB searchTerm="Rambo" />
          </ExampleDisplayer>
        </>
      );
    case "ThirdPartyPackages Examples":
      return (
        <>
          <ExampleDisplayer
            title="LoadSpinner"
            desc="src/components/ThirdPartyPackages/LoadSpinner"
          >
            <LoadSpinner />
          </ExampleDisplayer>
          <ExampleDisplayer
            title="ReactModal"
            desc="src/components/ThirdPartyPackages/ReactModal"
          >
            <ReactModal />
          </ExampleDisplayer>
        </>
      );
    default:
      return <p>Not defined examples</p>;
  }
}
