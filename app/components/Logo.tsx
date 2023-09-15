'use client'
import React from "react";
import styled from 'styled-components';
import { useTheme } from 'next-themes'; // Import the useTheme hook from next-themes

export function Logo() {
    const Header = styled.header`
    font-family: 'Josefin Sans', sans-serif;
    background-color: rgba(51, 51, 51, 0);
    padding: 20px;
    text-align: center;
    // Add the text-white class for white text in dark mode
  `;

    const Title = styled.h1`
    font-size: 2rem;
  `;

    const { resolvedTheme } = useTheme(); // Use the useTheme hook to get the current theme

    return (
        <Header><Title>TANNENKRUG</Title></Header>
    );
}
