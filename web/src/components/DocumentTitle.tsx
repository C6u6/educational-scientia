import { useEffect, useRef } from "react";

interface Props {
    title: string,
    prevailOnUnmount?: boolean
}

export function DocumentTitle({title, prevailOnUnmount = false}:Props) {
    const defaultTitle = useRef(document.title);
  
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    useEffect(() => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    }, [])

    return(<></>)
  }