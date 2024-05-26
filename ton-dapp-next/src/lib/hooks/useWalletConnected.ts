// demo-dapp-with-wallet\src\hooks\useWalletConnected.ts
import { useTonWallet } from '@tonconnect/ui-react';

const useWalletConnected = (): boolean => {
  const wallet = useTonWallet();
  return wallet !== null;
};

export default useWalletConnected;