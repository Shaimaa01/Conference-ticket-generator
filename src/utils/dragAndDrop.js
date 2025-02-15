export const dragAndDrop = (setFieldValue) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFieldValue("file", droppedFile);
  };

  return { handleDragOver, handleDragLeave, handleDrop };
};
