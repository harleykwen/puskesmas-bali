import { Request, Response } from 'express'
import Pasien from '../models/pasien.model'

export async function isPasienRegistered(req: Request, res: Response) {
    try {
        const { nik } = req.body
        const isRegistered: any = await Pasien.findOne({ nik })
        return res.status(200).json({
            message: isRegistered ? 'pasien sudah terdaftar' : 'pasien belum terdaftar',
            data: isRegistered,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'terjadi kesalahan pada server',
            error,
        })
    }
}

export async function createPasien(req: Request, res: Response) {
    try {
        const {
            nik,
            tempat_lahir,
            tanggal_lahir,
            alamat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            agama,
            status_perkawinan,
            pekerjaan,
            kewarganegaraan,
        } = req.body
        console.log({
            nik,
            tempat_lahir,
            tanggal_lahir,
            alamat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            agama,
            status_perkawinan,
            pekerjaan,
            kewarganegaraan,
        })
        const newPasien = await Pasien.create({
            nik,
            tempat_lahir,
            tanggal_lahir,
            alamat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            agama,
            status_perkawinan,
            pekerjaan,
            kewarganegaraan,
        })
        return res.status(200).json({
            message: 'input data pasien baru berhasil',
            data: newPasien,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'terjadi kesalahan pada server',
            error,
        })
    }
}