import { useState } from 'react';
import { 
  Search, 
  Lock, 
  Shield, 
  ChevronRight, 
  Check,
  X,
  Building2,
  Star
} from 'lucide-react';

interface PlaidConnectProps {
  accountType: 'bank' | 'credit';
  onSuccess: (accountData: any) => void;
  onClose: () => void;
}

// Mock bank data
const MOCK_BANKS = [
  { id: 1, name: 'Chase', logo: '🏦', popular: true },
  { id: 2, name: 'Bank of America', logo: '🏦', popular: true },
  { id: 3, name: 'Wells Fargo', logo: '🏦', popular: true },
  { id: 4, name: 'Citi', logo: '🏦', popular: true },
  { id: 5, name: 'Capital One', logo: '🏦', popular: false },
  { id: 6, name: 'US Bank', logo: '🏦', popular: false },
  { id: 7, name: 'PNC Bank', logo: '🏦', popular: false },
  { id: 8, name: 'TD Bank', logo: '🏦', popular: false },
  { id: 9, name: 'American Express', logo: '💳', popular: true },
  { id: 10, name: 'Discover', logo: '💳', popular: false },
];

export function PlaidConnect({ accountType, onSuccess, onClose }: PlaidConnectProps) {
  const [step, setStep] = useState<'select' | 'credentials' | 'loading' | 'success'>('select');
  const [selectedBank, setSelectedBank] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const filteredBanks = MOCK_BANKS.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularBanks = filteredBanks.filter(bank => bank.popular);
  const otherBanks = filteredBanks.filter(bank => !bank.popular);

  const handleBankSelect = (bank: any) => {
    setSelectedBank(bank);
    setStep('credentials');
  };

  const handleSubmitCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');

    // Simulate API call
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess({
          bank: selectedBank.name,
          accountType: accountType,
          accounts: accountType === 'bank' 
            ? ['Checking ****1234', 'Savings ****5678']
            : ['Card ****9012']
        });
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0a2540] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg">Connect your {accountType === 'bank' ? 'bank' : 'credit card'}</h2>
              <p className="text-xs text-gray-300">Powered by Plaid</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {step === 'select' && (
            <div className="p-4 sm:p-6">
              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-blue-900 mb-1">Your data is secure</p>
                    <p className="text-xs text-blue-700">
                      We use 256-bit encryption. Your credentials are never stored or shared.
                    </p>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-4 sm:mb-6">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your bank or card..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a86a] focus:border-transparent outline-none text-sm sm:text-base"
                />
              </div>

              {/* Popular Banks */}
              {popularBanks.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    <h3 className="text-xs sm:text-sm text-gray-900 font-medium">Popular</h3>
                  </div>
                  <div className="space-y-2">
                    {popularBanks.map(bank => (
                      <BankOption
                        key={bank.id}
                        bank={bank}
                        onSelect={() => handleBankSelect(bank)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Banks */}
              {otherBanks.length > 0 && (
                <div>
                  <h3 className="text-xs sm:text-sm text-gray-700 mb-3 font-medium">All institutions</h3>
                  <div className="space-y-2">
                    {otherBanks.map(bank => (
                      <BankOption
                        key={bank.id}
                        bank={bank}
                        onSelect={() => handleBankSelect(bank)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 'credentials' && selectedBank && (
            <div className="p-4 sm:p-6">
              <button
                onClick={() => setStep('select')}
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 flex items-center gap-1"
              >
                ← Back to banks
              </button>

              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl">{selectedBank.logo}</div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-900">{selectedBank.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Enter your online banking credentials</p>
                </div>
              </div>

              <form onSubmit={handleSubmitCredentials} className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-700 mb-2">Username or Email</label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a86a] focus:border-transparent outline-none text-sm sm:text-base"
                    required
                    placeholder="Enter your username"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a86a] focus:border-transparent outline-none text-sm sm:text-base"
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600">
                      Your credentials are encrypted and sent directly to {selectedBank.name}. 
                      Lumino never sees or stores your password.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-[#0a2540] text-white rounded-lg hover:bg-[#1a3a5a] transition-all text-sm sm:text-base font-medium"
                >
                  Connect Account
                </button>
              </form>
            </div>
          )}

          {step === 'loading' && (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#c9a86a] border-t-transparent rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
              <h3 className="text-base sm:text-lg text-gray-900 mb-2">Connecting to {selectedBank?.name}...</h3>
              <p className="text-xs sm:text-sm text-gray-600">This may take a few seconds</p>
            </div>
          )}

          {step === 'success' && (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-900 mb-2">Successfully connected!</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Your {selectedBank?.name} account has been linked
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BankOption({ bank, onSelect }: { bank: any; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-[#c9a86a] hover:bg-gray-50 transition-all"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="text-xl sm:text-2xl">{bank.logo}</div>
        <span className="text-gray-900 text-sm sm:text-base">{bank.name}</span>
      </div>
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
    </button>
  );
}