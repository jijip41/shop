export async function uploadImg(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

  return await fetch(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
