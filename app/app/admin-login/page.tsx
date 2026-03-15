"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [keyValue, setKeyValue] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: keyValue }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Login failed.");