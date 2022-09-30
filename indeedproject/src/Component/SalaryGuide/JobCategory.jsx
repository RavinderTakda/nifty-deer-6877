import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Pages/Footer";
import { categoryJobsSearch } from "../Redux/JobByCategoryreducer/action";
import { JobByCategoryFooter } from "./JobFooter";
import styles from "./Salary.module.css";

function JobByCategory({ category }) {
  const dispatch = useDispatch();
  let params = category.replaceAll(" ", "").toLowerCase();
  const data = useSelector((state) => state.jobsByCategoryReducer.jobs_data);

  useEffect(() => {
    dispatch(categoryJobsSearch(params));
  }, [params, dispatch]);

  return (
    <>
     <h2 style={{ borderBottom:"1px solid black",width:"fit-content",marginTop:"-220px " }}>{category}</h2>
      <div className={styles.categoryJobs}>
        
        {data &&
          data.map((job, index) => {
            return (
              <div key={index} className={styles.jobSalary}>
                <div>
                  <Heading size={"sm"}>{job.name}</Heading>
                </div>
                <Heading size={"sm"}>{`${job.salary} per year`}</Heading>
              </div>
            );
          })}
      </div>
      <JobByCategoryFooter />
      <Footer/>
    </>
  );
}

export { JobByCategory };
