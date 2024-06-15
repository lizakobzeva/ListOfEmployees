import React, { ReactNode, useEffect, useState } from "react";
import style from "./Pagination.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { useSelector } from "react-redux";
import { getActivePage } from "entities/Post/model/selectors/getActivePage";

const Pagination = () => {
  const activePage = useSelector(getActivePage);
  const pagesList = [1, 2, 3, 4, 5, 6, 7];
  const dispatch = useAppDispatch();
  const ChangePage = (page: number) => {
    dispatch(GetPosts(page));
  };
  const BackPage = () => {
    if (activePage > 1) dispatch(GetPosts(activePage - 1));
  };
  const NextPage = () => {
    if (activePage < pagesList.length) dispatch(GetPosts(activePage + 1));
  };

  return (
    <ul className={style.page}>
      <svg
        onClick={BackPage}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      {pagesList.map((page) => (
        <li
          onClick={() => ChangePage(page)}
          className={classNames(style.pageNumbers, {
            [style.active]: activePage == page,
          })}
        >
          {page}
        </li>
      ))}
      <svg
        onClick={NextPage}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ul>
  );
};

export default Pagination;
