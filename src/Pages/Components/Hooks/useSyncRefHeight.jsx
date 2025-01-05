
// Store all elements per key, so it is easy to retrieve them
const store = {};

// Triggered when useLayoutEffect is executed on any of the components that use useSyncRefHeight hook
const handleResize = (key) => {
  // get all elements with the same key
  const elements = store[key];
  if (elements) {
    let maxH = 0;
    let maxW = 0;
    // find the element with highest clientHeight value
    elements.forEach((element) => {
      if (element.current) {
        element.current.style.minHeight = '0px';
        element.current.style.minWidth  = '0px';
      }
    });

    elements.forEach((element) => {
      if (element.current && element.current.clientHeight > maxH) {
        maxH = element.current.clientHeight;
      }
      if (element.current && element.current.clientWidth > maxW) {
        maxW = element.current.clientWidth;
      }
    });
    // update height of all 'joined' elements
    elements.forEach((element) => {
      if (element.current) {
        element.current.style.minHeight = `${maxH}px`;
        element.current.style.minWidth  = `${maxW}px`;
      }
    });
  }
};

// Add element to the store when component is mounted and return cleanup function
const add = (key, element) => {
  // create store if missing
  if (!store[key]) {
    store[key] = [];
  }

  store[key].push(element);

  // cleanup function
  return () => {
    const index = store[key].indexOf(element);
    if (index > -1) {
      store[key].splice(index, 1);
    }
  };
};

 export  function syncRefHeight (refs, deps)  {

    // store cleanup functions for each entry
    const cleanups = [];
    refs.forEach(([key, element]) => {
      // add element ref to store
      cleanups.push(add(key, element));
    });

    refs.forEach(([key]) => {
      handleResize(key);
    });

    return () => {
      // cleanup when component is destroyed
      cleanups.forEach((cleanup) => cleanup());
    };
};