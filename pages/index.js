import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
          router.push('/signup');
      }, 1000);
    }, []);

  return (
    
    <div>
      <div className="not-found">
            <h1>Welcome To</h1>
            <h2>Bpazes Client Challenge.</h2>
            <h3>Lets Register</h3>
        </div>
    </div>
  )
}
