'use client';
import styles from '@/styles/Home.module.css';
import { ChatEngine } from 'react-chat-engine';

export default function Messages() {
  return (
    <div className={`text-green-500 ${styles.main}`}>Messages
      <ChatEngine
        projectID='f06a82ab-ee91-4d7d-9b6d-90b79d3392ca'
        userName='Larsy'
        userSecret='123qwe'
      />
    </div>);
}
