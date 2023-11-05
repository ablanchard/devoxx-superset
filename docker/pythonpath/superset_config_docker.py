# Enable Embedding
FEATURE_FLAGS = {
    "EMBEDDED_SUPERSET": True,
    "ENABLE_TEMPLATE_PROCESSING": True,
    "DASHBOARD_CROSS_FILTERS": True,
    "DASHBOARD_RBAC": True,
    "GENERIC_CHART_AXES": True,
}

# Fix errors when updating datasets
OLD_API_CHECK_DATASET_OWNERSHIP = True

# Allow embedding dashboards in iframes (should be secured in production with also additional authentication)
ENABLE_PROXY_FIX = True
OVERRIDE_HTTP_HEADERS = {"X-Frame-Options": "ALLOWALL"}
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_SAMESITE = "None"
GUEST_ROLE_NAME = "GUEST"
TALISMAN_ENABLED = False

# Activate logs
ENABLE_TIME_ROTATE = True

SECRET_KEY = 'UHjIxzOpgoU4Hv9VfJyOS5QGcG2xLyF8j9MlqbiGoCtBiFSyAO9OI9Rk'


# Remove irrelevant time grains
TIME_GRAIN_DENYLIST = ["PT1S", "PT1M"]
