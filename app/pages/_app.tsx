import { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function MyApp({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Mainnet; // Ou Mainnet, Testnet conforme necessário
  const wallets = useMemo(() => [
    new PhantomWalletAdapter({ network }),
    new SolflareWalletAdapter({ network }),
    // Adicione outros adaptadores de wallet conforme necessário
  ], [network]);

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default MyApp;


