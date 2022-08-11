import { useEffect } from "react";

export function useTitle(title) {
    useEffect(() => {
      const MyTitle = document.title
      document.title = title
      return () => {
        document.title = MyTitle
      }
    })
  }