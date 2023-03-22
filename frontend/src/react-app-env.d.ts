/// <reference types="react-scripts" />

import { MetaMaskInpageProvider } from 'metamask-react/lib/metamask-provider';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}