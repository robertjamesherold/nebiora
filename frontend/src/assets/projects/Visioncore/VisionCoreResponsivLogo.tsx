import Hooks from '@/hooks'

import VisionCoreAssets from './'


const VisionCoreResponsiveLogo = () => {
    const breakpoints = Hooks.useBreakpoint()
    const size = breakpoints === "xs" ? 12 : breakpoints === "sm" ? 24 : breakpoints === "md" ? 24 : breakpoints === "lg" ? 32 : breakpoints === "xl" ? 48 : breakpoints === "2xl" ? 64 : 64

    return ( breakpoints === "xs" || breakpoints === "sm" ) ?
            <VisionCoreAssets.Logo.WordLogo size={size} />
         : (
            (breakpoints === "md" || breakpoints === "lg" || breakpoints === "xl" || breakpoints === "2xl" || breakpoints === "3xl") && (
                <VisionCoreAssets.Logo.Logo size={size} />
            )
         )
    

    }

export default VisionCoreResponsiveLogo
