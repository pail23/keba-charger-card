export const VERSION = '0.0.12';

export const CHARGERDOMAIN = 'keba';
export const STATUS_ENTITY_BASE = '_status';

export const CHARGERSTATUS = {
  STANDBY_1: 'disconnected',
  PAUSED_2: 'awaiting_start',
  CHARGING_3: 'charging',
  READY_4: 'completed',
  ERROR_5: 'error',
  CONNECTED_6: 'ready_to_charge',
};

export const LEDIMAGES = {
  normal: {
    DEFAULT: ledOff,
    disconnected: ledWhite2,
    awaiting_start: ledWhiteAll,
    charging: ledWhiteFlashing,
    completed: ledWhiteAll,
    error: ledRedFlashing,
    ready_to_charge: ledWhiteAll,
  },
  smart: {
    DEFAULT: ledOff,
    disconnected: ledBlue2,
    awaiting_start: ledBlueAll,
    charging: ledBlueFlashing,
    completed: ledBlueAll,
    error: ledRedFlashing,
    ready_to_charge: ledBlueAll,
  },
};

export const ENTITIES = {
  cableLocked: 'binary_sensor.plug', // keba done
  cableLockedPermanently: 'switch.cable_locked_permanently',
  chargingState: 'binary_sensor.charging_state', // keba done
  basicSchedule: 'binary_sensor.basic_schedule',
  circuitCurrent: 'sensor.circuit_current',
  costPerKwh: 'sensor.cost_per_kwh',
  dynamicChargerCurrent: 'sensor.dynamic_charger_limit',
  dynamicCircuitCurrent: 'sensor.dynamic_circuit_limit',
  enableIdleCurrent: 'switch.enable_idle_current',
  inCurrent: 'sensor.current',
  isEnabled: 'switch.is_enabled',
  maxChargerCurrent: 'sensor.max_current', //keba done
  maxCircuitCurrent: 'sensor.max_circuit_limit',
  offlineCircuitCurrent: 'sensor.offline_circuit_limit',
  isOnline: 'binary_sensor.status', //keba done
  outputCurrent: 'sensor.output_limit',
  reasonForNoCurrent: 'sensor.reason_for_no_current',
  sessionEnergy: 'sensor.session_energy', //keba done
  energyPerHour: 'sensor.energy_per_hour',
  energyLifetime: 'sensor.total_energy', //keba done
  smartCharging: 'switch.smart_charging',
  totalPower: 'sensor.charging_power', //keba done
  updateAvailable: 'binary_sensor.update_available',
  voltage: 'sensor.voltage',
};

export const SERVICES = {
  chargerMaxCurrent: 'set_charger_max_limit',
  chargerDynCurrent: 'set_charger_dynamic_limit',
  circuitMaxCurrent: 'set_charger_circuit_max_limit',
  circuitDynCurrent: 'set_charger_circuit_dynamic_limit',
  circuitOfflineCurrent: 'set_charger_circuit_offline_limit',
};

import imageGeneric from './img/keba.png'; //'./img/charger_generic_223x302.png';

export const DEFAULTIMAGE = 'Generic';
export const CHARGER_IMAGES = [{ name: 'Generic', img: imageGeneric }];

import ledOff from './img/charger_leds_bg.gif';
import ledWhite2 from './img/charger_leds_white_2.gif';
import ledWhiteAll from './img/charger_leds_white_all.gif';
import ledWhiteFlashing from './img/charger_leds_white_flashing.gif';
import ledBlue2 from './img/charger_leds_blue_2.gif';
import ledBlueAll from './img/charger_leds_blue_all.gif';
import ledBlueFlashing from './img/charger_leds_blue_flashing.gif';
import ledRedFlashing from './img/charger_leds_red_flashing.gif';

export const ICONS = {
  'binary_sensor.plug': 'mdi:lock',
  'switch.cable_locked_permanently': 'mdi:lock',
  'binary_sensor.basic_schedule': 'mdi:clock-check',
  'sensor.circuit_current': 'mdi:sine-wave',
  'sensor.cost_per_kwh': 'mdi:currency-usd',
  'sensor.dynamic_charger_limit': 'mdi:sine-wave',
  'sensor.dynamic_circuit_limit': 'mdi:sine-wave',
  'switch.enable_idle_current': 'mdi:current-dc',
  'sensor.offline_circuit_limit': 'mdi:sine-wave',
  'sensor.current': 'mdi:sine-wave',
  'switch.is_enabled': 'mdi:power',
  'sensor.max_current': 'mdi:sine-wave',
  'sensor.max_circuit_limit': 'mdi:sine-wave',
  'binary_sensor.status': 'mdi:wifi',
  'sensor.output_limit': 'mdi:sine-wave',
  'sensor.reason_for_no_current': 'mdi:alert-circle',
  'sensor.session_energy': 'mdi:flash',
  'sensor.energy_per_hour': 'mdi:flash',
  'sensor.total_energy': 'mdi:flash',
  'switch.smart_charging': 'mdi:auto-fix',
  'sensor.charging_power': 'mdi:flash',
  'binary_sensor.update_available': 'mdi:file-download',
  'sensor.voltage': 'mdi:sine-wave',
};

export const CURRENTLIMITS = [8.0, 10.0, 16.0, 20.0, 25.0, 32.0];

export const DEFAULT_CUSTOMCARDTHEME = 'theme_default';
export const CUSTOM_CARD_THEMES = [
  { name: 'theme_default', desc: 'Default HA colors' },
  { name: 'theme_custom', desc: 'Use custom theme' },
  { name: 'theme_transp_blue', desc: 'Transparent Blue' },
  { name: 'theme_transp_black', desc: 'Transparent Black' },
  { name: 'theme_transp_white', desc: 'Transparent White' },
  { name: 'theme_lightgrey_blue', desc: 'LightGrey Blue' },
];

export const STATE_BUTTONS = [{ state: 'PAUSED', img: imageGeneric }];
