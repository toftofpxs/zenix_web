'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { content } from '@/data/content'
import toast from 'react-hot-toast'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone?: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      toast.success('Merci ! Nous vous répondrons très bientôt.')
      reset()
    } catch (error) {
      toast.error('Une erreur est survenue. Réessayez.')
    }
  }

  return (
    <section id="contact" className="w-full py-24 bg-black text-white">
      <div className="px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{content.contact.title}</h2>
          <p className="text-gray-400 text-lg">{content.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {content.contact.form.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-white mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    {...register(field.name as keyof ContactFormData, { required: field.required })}
                    placeholder={field.label}
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors rounded-sharp"
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    {...register(field.name as keyof ContactFormData, { required: field.required })}
                    placeholder={field.label}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors rounded-sharp"
                  />
                )}
                {errors[field.name as keyof ContactFormData] && (
                  <p className="text-red-400 text-xs mt-1">Ce champ est requis</p>
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black px-6 py-3 rounded-sharp font-medium hover:bg-accent transition-all disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-sm text-gray-400 mb-2 font-medium">Email</p>
              <a href={`mailto:${content.contact.contactInfo.email}`} className="text-lg text-white hover:text-accent transition-colors">
                {content.contact.contactInfo.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2 font-medium">Téléphone</p>
              <a href={`tel:${content.contact.contactInfo.phone}`} className="text-lg text-white hover:text-accent transition-colors">
                {content.contact.contactInfo.phone}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2 font-medium">Localisation</p>
              <p className="text-lg text-white">{content.contact.contactInfo.location}</p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">Nous vous répondrons en moins de 24h.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
