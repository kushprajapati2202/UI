import { useState } from 'react';
import { 
  Building2, 
  CreditCard, 
  Check, 
  Shield, 
  Lock,
  ChevronRight,
  Briefcase,
  Eye,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import logo from 'figma:asset/e885d4d764a866fd155f344905463195a9a6f0c9.png';

interface LinkAccountsProps {
  onContinue: () => void;
  onConnectAccount: (type: 'bank' | 'credit') => void;
  linkedAccounts: {
    checking: boolean;
    creditCards: string[];
  };
}

export function LinkAccounts({ onContinue, onConnectAccount, linkedAccounts }: LinkAccountsProps) {
  const canContinue = linkedAccounts.checking || linkedAccounts.creditCards.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="text-center mb-6 md:mb-8">
          <img src={logo} alt="Lumino" className="w-20 sm:w-24 md:w-28 mx-auto mb-6 md:mb-8" />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0a2540] to-[#1a4560] px-6 md:px-8 py-6 md:py-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#c9a86a] opacity-10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#c9a86a] rounded-xl md:rounded-2xl mb-3 md:mb-4">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl text-white mb-2 md:mb-3">Link your accounts</h1>
              <p className="text-gray-300 text-xs md:text-sm max-w-md mx-auto">
                Connect your financial accounts to unlock hidden assets and personalized insights
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
            {/* Security Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-4 md:p-5 mb-4 md:mb-6 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#0a2540] font-medium">Bank-level encryption</p>
                  <p className="text-xs text-gray-600">Your data is protected by 256-bit SSL security</p>
                </div>
              </div>
            </div>

            {/* Account Cards */}
            <div className="space-y-3 mb-4 md:mb-6">
              {/* Bank Accounts */}
              <AccountCard
                icon={<Building2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />}
                title="Bank Accounts"
                description="Checking, savings, and cash accounts"
                isConnected={linkedAccounts.checking}
                onConnect={() => onConnectAccount('bank')}
                bgColor="bg-blue-50"
                borderColor={linkedAccounts.checking ? 'border-blue-600' : 'border-gray-200'}
              />

              {/* Credit Cards */}
              <AccountCard
                icon={<CreditCard className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />}
                title="Credit Cards"
                description="Track rewards, points, and expenses"
                isConnected={linkedAccounts.creditCards.length > 0}
                connectedCount={linkedAccounts.creditCards.length}
                onConnect={() => onConnectAccount('credit')}
                bgColor="bg-purple-50"
                borderColor={linkedAccounts.creditCards.length > 0 ? 'border-purple-600' : 'border-gray-200'}
              />

              {/* Investment Accounts */}
              <AccountCard
                icon={<Briefcase className="w-5 h-5 md:w-6 md:h-6 text-green-600" />}
                title="Investment Accounts"
                description="Brokerage, 401(k), and retirement"
                isComingSoon
                bgColor="bg-green-50"
                borderColor="border-gray-200"
              />
            </div>

            {/* Security Features */}
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <SecurityFeature
                  icon={<Lock className="w-4 h-4" />}
                  title="Bank-level security"
                  description="Data encrypted end-to-end"
                />
                <SecurityFeature
                  icon={<Eye className="w-4 h-4" />}
                  title="Read-only access"
                  description="We never move money"
                />
                <SecurityFeature
                  icon={<Shield className="w-4 h-4" />}
                  title="Privacy first"
                  description="Never shared with others"
                />
              </div>
            </div>

            {/* Warning */}
            {!canContinue && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-xl p-3 md:p-4 mb-4 md:mb-6 text-center">
                <p className="text-xs md:text-sm text-amber-800">
                  Connect at least one account to continue
                </p>
              </div>
            )}

            {/* Continue Button */}
            <button
              onClick={onContinue}
              disabled={!canContinue}
              className={`w-full py-3 md:py-4 rounded-lg md:rounded-xl transition-all flex items-center justify-center gap-2 font-medium text-sm md:text-base ${
                canContinue
                  ? 'bg-gradient-to-r from-[#0a2540] to-[#1a4560] hover:from-[#1a3a5a] hover:to-[#2a5070] text-white shadow-lg shadow-[#0a2540]/20'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Continue to Dashboard</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <p className="text-xs text-gray-400 text-center mt-3 md:mt-4">
              By continuing, you agree to our{' '}
              <a href="#" className="text-[#c9a86a] hover:underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-[#c9a86a] hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Skip Link */}
        <div className="text-center mt-4 md:mt-6">
          <button
            onClick={onContinue}
            className="text-xs md:text-sm text-gray-500 hover:text-[#c9a86a] transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function AccountCard({
  icon,
  title,
  description,
  isConnected,
  connectedCount,
  onConnect,
  isComingSoon,
  bgColor,
  borderColor
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isConnected?: boolean;
  connectedCount?: number;
  onConnect?: () => void;
  isComingSoon?: boolean;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg md:rounded-xl p-3 md:p-4 transition-all hover:shadow-md`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-[#0a2540] font-medium text-sm md:text-base">{title}</h3>
              {isConnected && (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 rounded-full">
                  <Check className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-700">
                    {connectedCount ? `${connectedCount}` : 'Connected'}
                  </span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-0.5">{description}</p>
          </div>
        </div>
        {!isComingSoon && (
          <button
            onClick={onConnect}
            className={`px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all w-full sm:w-auto ${
              isConnected
                ? 'bg-white text-[#0a2540] border-2 border-gray-200 hover:border-gray-300'
                : 'bg-[#0a2540] text-white hover:bg-[#1a3a5a]'
            }`}
          >
            {isConnected ? 'Add more' : 'Connect'}
          </button>
        )}
        {isComingSoon && (
          <span className="px-3 py-1.5 bg-white text-gray-500 rounded-lg text-xs border border-gray-200 text-center sm:text-left">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

function SecurityFeature({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0a2540] rounded-lg flex items-center justify-center text-white mx-auto mb-2">
        {icon}
      </div>
      <h4 className="text-xs text-[#0a2540] font-medium mb-1">{title}</h4>
      <p className="text-xs text-gray-500 leading-snug">{description}</p>
    </div>
  );
}