import React, { useEffect } from 'react';

const SITE_NAME = 'Arief R Ramadhan';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  }, [title]);

  return null;
};

export default PageTitle;
