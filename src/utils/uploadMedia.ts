import AWS from "aws-sdk"
import { AWS_ACCESS_KEY_ID, AWS_REGION, AWS_S3_BUCKET, AWS_SECRET_ACCESS_KEY, CLOUDINARY_NAME } from "@configs/index"
import toast from "react-hot-toast"

export const UploadMediaToCloudinary = async (file: File) => {
  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", CLOUDINARY_NAME)

  const options = {
    method: "POST",
    body: data
  }

  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`

  const response = await fetch(url, options)

  if (response.ok) {
    const data = await response.json()
    return data.secure_url
  }
}

export const UploadMediaToS3Bucket = async (file: File) => {
  const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
  })

  return s3.upload(
    {
      Bucket: AWS_S3_BUCKET,
      Key: "images/" + file.name,
      Body: file
    },
    (err, data) => {
      if (err) {
        toast.error(err.message)
        return
      } else {
        return data.Location
      }
    }
  )
}
