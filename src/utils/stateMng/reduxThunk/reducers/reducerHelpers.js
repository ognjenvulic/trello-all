export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function addOrUpdateItemInArray(array, itemId, updateItemCallback) {
  let updatedItems = [];
  let updatedItem = null;
  if (array && array.map) {
    updatedItems = array.map((item) => {
      if (item.id !== itemId) {
        return item;
      }
      updatedItem = updateItemCallback(item);
      return updatedItem;
    });
  }

  if (!updatedItem) {
    updatedItem = updateItemCallback({});
    updatedItems.push(updatedItem);
  }

  return updatedItems;
}
