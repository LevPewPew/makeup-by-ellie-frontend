import XXH from 'xxhashjs';

// for a Blob to become a File, it needs the lastModifiedDate and name properties, so this function will add them
function blobToFile(blob, fileName){
  blob.lastModifiedDate = new Date();
  blob.name = `${fileName}.${blob.type.split('/')[1]}`;

  return blob;
}

// ensure all files ever generated with this method likely have unique names (chance of non-unique is miniscule with multiple users using same bucket at same time. at different times or a single user it is impossible)
function blobsToUniqueFiles(blobs) {
  let files = blobs.map((blob, index) => {
    let randHash = XXH.h64(`${Math.random()}`, 0x1A2B3C).toString(16);

    return blobToFile(blob, `${randHash}${index}-${Date.now()}`);
  });

  return files;
}

export {
  blobToFile,
  blobsToUniqueFiles
};
