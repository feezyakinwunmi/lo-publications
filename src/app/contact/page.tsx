// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  Mail,
  MapPin,
  FileUp,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
  Clock,
  MessageSquare,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  messageType: z.enum([
    "General Inquiry",
    "Manuscript Submission",
    "Partnership Opportunity",
    "Other",
  ]),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const MAX_FILE_MB = 10;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { messageType: "General Inquiry" },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setAttachmentError(null);

    if (!file) {
      setAttachment(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setAttachmentError("Only PDF, DOC, DOCX, JPG, or PNG files are allowed.");
      setAttachment(null);
      return;
    }

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setAttachmentError(`File must be under ${MAX_FILE_MB}MB.`);
      setAttachment(null);
      return;
    }

    setAttachment(file);
  };

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitError(null);

  try {
    // 1. Convert attachment to base64 if present
    let attachmentPayload: { filename: string; content: string } | null = null;

    if (attachment) {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(attachment);
      });

      attachmentPayload = {
        filename: attachment.name,
        content: base64,
      };
    }

    // 2. Build the Web3Forms payload
    const payload = {
      access_key:"f0aaf03b-9435-4b89-92ff-056b1e7cf0b1",
      subject: `[Contact] ${data.messageType} — ${data.name}`,
      from_name: "LO Publications Contact Form",
      name: data.name,
      email: data.email,
      message_type: data.messageType,
      message: data.message,
      attachment: attachmentPayload,
    };

    // 3. Send to Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to send message");
    }

    setSubmitSuccess(true);
    reset();
    setAttachment(null);
  } catch (err: any) {
    setSubmitError(err.message || "Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white mt-20 md:mt-0">
      {/* Hero */}
      <section className="relative py-20 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(185,28,28,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-900 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <MessageSquare size={14} />
            Contact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you&apos;re an aspiring author, a seasoned writer, or
            someone with a compelling narrative to share — we&apos;re here to
            support your journey from first word to final print.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left: Info — smaller column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Reach Us Directly
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  For questions, collaborations, or general inquiries — pick the
                  channel that fits best.
                </p>

                <div className="space-y-3">
                  {/* General Inquiries */}
                  <a
                    href="mailto:layo@lomediahouse.com"
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-red-200 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition">
                      <Mail className="text-red-900" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-black text-sm">
                        General Inquiries
                      </p>
                      <p className="text-red-900 text-sm break-all">
                        layo@lomediahouse.com
                      </p>
                    </div>
                  </a>

                  {/* Manuscript Submissions */}
                  <a
                    href="mailto:layo@lomediahouse.com"
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-red-200 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition">
                      <FileUp className="text-red-900" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-black text-sm">
                        Manuscript Submissions
                      </p>
                      <p className="text-red-900 text-sm break-all">
                        layo@lomediahouse.com
                      </p>
                    </div>
                  </a>

                  {/* Office */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-red-900" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">
                        Head Office
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        1551 Lycee Place, Ottawa, ON K1G 4B5
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <Clock
                  className="text-amber-700 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-sm text-amber-900 leading-relaxed">
                  We typically respond within{" "}
                  <strong>2–3 business days</strong>. Manuscript submissions may
                  take longer due to our review process.
                </p>
              </div>
            </motion.div>

            {/* Right: Form — larger column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We&apos;ll get back to you as soon as we can.
              </p>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">
                    Message Sent
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We&apos;ve received your message
                    and will respond within 2–3 business days.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 text-sm font-medium text-red-900 hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Error banner */}
                  {submitError && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-100">
                      <AlertCircle
                        className="text-red-600 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <p className="text-sm text-red-900">{submitError}</p>
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        {...register("name")}
                        className="w-full text-black px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full text-black px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message Type
                    </label>
                    <select
                      {...register("messageType")}
                      className="w-full text-black px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Manuscript Submission">
                        Manuscript Submission
                      </option>
                      <option value="Partnership Opportunity">
                        Partnership Opportunity
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={7}
                      className="w-full text-black px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition resize-none"
                      placeholder="How can we help you today?"
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Attachment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attachment{" "}
                      <span className="text-gray-400 font-normal">
                        (optional, max 10MB)
                      </span>
                    </label>

                    {attachment ? (
                      <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-green-200 bg-green-50">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileUp
                            className="text-green-700 flex-shrink-0"
                            size={20}
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-green-900 truncate">
                              {attachment.name}
                            </p>
                            <p className="text-xs text-green-700">
                              {(attachment.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setAttachment(null)}
                          className="p-1.5 rounded-lg hover:bg-green-100 transition"
                          aria-label="Remove attachment"
                        >
                          <X size={16} className="text-green-800" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-red-300 hover:bg-red-50/30 transition">
                        <FileUp className="text-gray-400" size={28} />
                        <span className="text-sm text-gray-600 text-center">
                          Click to upload — PDF, DOC, DOCX, JPG, PNG
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}

                    {attachmentError && (
                      <p className="text-red-600 text-xs mt-1.5">
                        {attachmentError}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-900 text-white py-4 rounded-xl font-semibold text-base hover:bg-red-800 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting, you agree to be contacted about your inquiry.
                    We never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}