import { model, Schema } from 'mongoose'

interface IPasien {
    nik: string
    tempat_lahir: string
    tanggal_lahir: string
    alamat: string
    rt: string
    rw: string
    kelurahan: string
    kecamatan: string
    agama: string
    status_perkawinan: string
    pekerjaan: string
    kewarganegaraan: string
}

const pasienSchema = new Schema<IPasien>({
    nik: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    tempat_lahir: {
        type: Schema.Types.String,
        required: true,
    },
    tanggal_lahir: {
        type: Schema.Types.String,
        required: true,
    },
    alamat: {
        type: Schema.Types.String,
        required: true,
    },
    rt: {
        type: Schema.Types.String,
        required: true,
    },
    rw: {
        type: Schema.Types.String,
        required: true,
    },
    kelurahan: {
        type: Schema.Types.String,
        required: true,
    },
    kecamatan: {
        type: Schema.Types.String,
        required: true,
    },
    agama: {
        type: Schema.Types.String,
        required: true,
    },
    status_perkawinan: {
        type: Schema.Types.String,
        required: true,
    },
    pekerjaan: {
        type: Schema.Types.String,
        required: true,
    },
    kewarganegaraan: {
        type: Schema.Types.String,
        required: true,
    },
})

const Pasien = model<IPasien>('Pasien', pasienSchema)

export default Pasien