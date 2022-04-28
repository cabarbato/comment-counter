const getFileID = url => {
    arr = url.split("/")
    d = arr.indexOf("d")
    return arr[d + 1]
    }

function Count (url) {
  const file_id = getFileID(url);
  const count = Drive.Comments.list(file_id).items.length
  const file_name = DriveApp.getFileById(file_id).getName()
  
  return {count, file_name}
}