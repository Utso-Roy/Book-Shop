const getStorage = () => {
    const storedBookId = localStorage.getItem('readList')
    if (storedBookId) {
        const storeParseDate = JSON.parse(storedBookId)
        return storeParseDate;
    }
    else {
        return [];
    }

}

const setStorage = (id) => {
    const storeParseDate = getStorage();

    if (storeParseDate.includes(id)) {
        alert('This id already exist')
    }
    else {
         storeParseDate.push(id)
        const data = JSON.stringify(storeParseDate);
        localStorage.setItem('readList' , data);
    }

}

export {setStorage}